/**
 * jQuery language filter plugin.
 *
 * Copyright (C) 2012 Alolita Sharma, Amir Aharoni, Arun Ganesh, Brandon Harris,
 * Niklas Laxström, Pau Giner, Santhosh Thottingal, Siebrand Mazeland and other
 * contributors. See CREDITS for a list.
 *
 * UniversalLanguageSelector is dual licensed GPLv2 or later and MIT. You don't
 * have to do anything special to choose one license or the other and you don't
 * have to notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @file
 * @ingroup Extensions
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

/**
 * Usage: $( 'inputbox' ).languagefilter();
 * The values for autocompletion is from the options.languages.
 * The data is in the format of languagecode:languagename.
 */
(function ( $ ) {
	'use strict';

	var LanguageFilter, delay;

	LanguageFilter = function( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, $.fn.regionselector.defaults, options );
		this.$element.addClass( 'languagefilter' );
		this.resultCount = 0;
		this.$suggestion = this.$element.parents().find( '#' + this.$element.data( 'suggestion' ) );
		this.$clear = this.$element.parents().find( '#' + this.$element.data( 'clear' ) );
		this.selectedLanguage = null;

		this.listen();
	};

	delay = ( function() {
		var timer = 0;

		return function( callback, milliseconds ) {
			clearTimeout( timer );
			timer = setTimeout( callback, milliseconds );
		};
	} () );

	LanguageFilter.prototype = {
		listen: function() {
			this.$element.on( 'keypress', $.proxy( this.keyup, this ) )
				.on( 'keyup', $.proxy( this.keyup, this ) );

			if ( this.eventSupported( 'keydown' ) ) {
				this.$element.on( 'keydown', $.proxy( this.keyup, this ) );
			}

			if ( this.$clear.length ) {
				this.$clear.on( 'click' , $.proxy( this.clear, this ) );
			}

			this.toggleClear();
		},

		keyup: function( e ) {
			var suggestion, query, languageFilter;

			switch( e.keyCode ) {
				case 9: // Tab -> Autocomplete
					suggestion = this.$suggestion.val();

					if ( suggestion && suggestion !== this.$element.val() ) {
						this.$element.val( suggestion );
						e.preventDefault();
						e.stopPropagation();
					}
					break;
				case 13: // Enter
					if ( !this.options.onSelect ) {
						break;
					}

					// Avoid bubbling this 'enter' to background page elements
					e.preventDefault();
					e.stopPropagation();

					query = $.trim( this.$element.val() ).toLowerCase();

					if ( this.selectedLanguage ) {
						// this.selectLanguage will be populated from a matching search
						this.options.onSelect( this.selectedLanguage );
					} else if ( this.options.languages[query] ) {
						// Search is yet to happen (in timeout delay),
						// but we have a matching language code.
						this.options.onSelect( query );
					}

					break;
				default:
					languageFilter = this;

					if ( e.which < 32 &&
						e.which !== 8 // Backspace
					) {
						// ignore any ASCII control characters
						break;
					}

					this.selectedLanguage = null;

					delay( function() {
						if ( !languageFilter.$element.val() ) {
							languageFilter.clear();
						} else {
							languageFilter.options.$target.empty();
							languageFilter.search();
						}
					}, 300 );

					this.toggleClear();
			}
		},

		/**
		 * Clears the current search removing
		 * clear buttons and suggestions.
		 */
		deactivate: function() {
			this.$element.val( '' );

			if ( !$.fn.uls.Constructor.prototype.isMobile() ) {
				this.$element.focus();
			}

			this.toggleClear();
			this.autofill();
		},

		/**
		 * Clears the search and shows all languages
		 */
		clear: function() {
			this.deactivate();
			this.$element.trigger( 'searchclear.uls' );
		},

		/**
		 * Toggles the visibility of clear icon depending
		 * on whether there is anything to clear.
		 */
		toggleClear: function() {
			if ( !this.$clear.length ) {
				return;
			}

			if ( this.$element.val() ) {
				this.$clear.show();
			} else {
				this.$clear.hide();
			}
		},

		search: function() {
			var languagesInScript,
				query = $.trim( this.$element.val() ),
				languages = $.uls.data.getLanguagesByScriptGroup( this.options.languages ),
				scriptGroup, langNum, langCode;

			this.resultCount = 0;

			for ( scriptGroup in languages ) {
				languagesInScript = languages[scriptGroup];

				languagesInScript.sort( $.uls.data.sortByAutonym );

				for ( langNum = 0; langNum < languagesInScript.length; langNum++ ) {
					langCode = languagesInScript[langNum];

					if ( query === '' || this.filter( langCode, query ) ) {
						if ( this.resultCount === 0 ) {
							// Autofill the first result.
							this.autofill( langCode );
						}

						if ( query.toLowerCase() === langCode ) {
							this.selectedLanguage = langCode;
						}

						if ( this.render( langCode ) ) {
							this.resultCount++;
						}
					}
				}
			}

			// Also do a search by search API
			if( !this.resultCount && this.options.searchAPI && query ) {
				this.searchAPI( query );
			} else {
				this.resultHandler( query );
			}
		},

		searchAPI: function( query ) {
			var languageFilter = this;

			$.get( languageFilter.options.searchAPI, { search: query }, function( result ) {
				$.each( result.languagesearch, function( code, name ) {
					if ( languageFilter.resultCount === 0 ) {
						// Autofill the first result.
						languageFilter.autofill( code, name );
					}

					if ( languageFilter.render( code ) ) {
						languageFilter.resultCount++;
					}
				} );

				languageFilter.resultHandler( query );
			} );
		},

		/**
		 * Handler method to be called once search is over.
		 * Based on search result triggers resultsfound or noresults events
		 * @param query string
		 */
		resultHandler: function( query ) {
			if ( this.resultCount === 0 ) {
				this.$suggestion.val( '' );
				this.$element.trigger( 'noresults.uls', query );
			} else {
				this.$element.trigger( 'resultsfound.uls', [query, this.resultCount] );
			}
		},

		autofill: function( langCode, languageName ) {
			if ( !this.$suggestion.length ) {
				return;
			}

			if ( !this.$element.val() ) {
				this.$suggestion.val( '' );
				return;
			}

			this.selectedLanguage = langCode;
			languageName = languageName || this.options.languages[langCode];

			if ( !languageName ) {
				return;
			}

			var autonym,
				userInput = this.$element.val(),
				suggestion = userInput + languageName.substring( userInput.length, languageName.length );

			if ( suggestion.toLowerCase() !== languageName.toLowerCase() ) {
				// see if it was autonym match
				autonym = $.uls.data.getAutonym( langCode ) || '';
				suggestion = userInput + autonym.substring( userInput.length, autonym.length );

				if ( suggestion !== autonym ) {
					// Give up. It may be an ISO/script code match.
					suggestion = '';
				}
			}

			// Make sure that it is a visual prefix.
			if ( !isVisualPrefix( userInput, suggestion ) ) {
				suggestion = '';
			}

			this.$suggestion.val( suggestion );
		},

		render: function( langCode ) {
			var $target = this.options.$target;

			if ( !$target ) {
				return false;
			}

			return $target.append( langCode );
		},

		escapeRegex: function( value ) {
			return value.replace( /[\-\[\]{}()*+?.,\\\^$\|#\s]/g, '\\$&' );
		},

		/**
		 * A search match happens if any of the following passes:
		 * a) Language name in current user interface language
		 * 'starts with' search string.
		 * b) Language autonym 'starts with' search string.
		 * c) ISO 639 code match with search string.
		 * d) ISO 15924 code for the script match the search string.
		 */
		filter: function( langCode, searchTerm ) {
			// FIXME script is ISO 15924 code. We might need actual name of script.
			var matcher = new RegExp( '^' + this.escapeRegex( searchTerm ), 'i' ),
				languageName = this.options.languages[langCode];

			return matcher.test( languageName ) ||
				matcher.test( $.uls.data.getAutonym( langCode ) ) ||
				matcher.test( langCode ) ||
				matcher.test( $.uls.data.getScript( langCode ) );
		},

		eventSupported: function ( eventName ) {
			var isSupported = eventName in this.$element;

			if ( !isSupported ) {
				this.$element.setAttribute( eventName, 'return;' );
				isSupported = typeof this.$element[eventName] === 'function';
			}

			return isSupported;
		}
	};

	$.fn.languagefilter = function( option ) {
		return this.each( function() {
			var $this = $( this ),
				data = $this.data( 'languagefilter' ),
				options = typeof option === 'object' && option;

			if ( !data ) {
				$this.data( 'languagefilter', ( data = new LanguageFilter( this, options ) ) );
			}

			if ( typeof option === 'string' ) {
				data[option]();
			}
		} );
	};

	$.fn.languagefilter.defaults = {
		$target: null, // Where to append the results
		searchAPI: null,
		languages: null, // Languages as code:name format.
		onSelect: null // Language select handler - like enter in filter textbox.
	};

	$.fn.languagefilter.Constructor = LanguageFilter;

	/**
	 * Check if a prefix is visually prefix of a string
	 * @param prefix string
	 * @param string string
	 */
	function isVisualPrefix( prefix, string ) {
		// Pre-base vowel signs of Indic languages. A vowel sign is called pre-base if
		// consonant + vowel becomes [vowel][consonant] when rendered. Eg: ക + െ => കെ
		var prebases = 'െേൈൊോൌெேைொோௌେୈୋୌિਿिিেৈোৌෙේෛොෝෞ';
		return prebases.indexOf( string[prefix.length] ) <= 0;
	}
} ( jQuery ) );
