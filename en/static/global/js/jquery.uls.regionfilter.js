/**
 * jQuery region filter plugin.
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

( function ( $ ) {
	'use strict';

	/* RegionSelector plugin definition */

	var RegionSelector;

	/**
	 * Region selector is a language selector based on regions.
	 * Usage: $( 'jqueryselector' ).regionselector( options );
	 * The attached element should have data-regiongroup attribute
	 * that defines the regiongroup for the selector.
	 */
	RegionSelector = function ( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, $.fn.regionselector.defaults, options );
		this.$element.addClass( 'regionselector' );
		this.regions = [];
		this.cache = null;
		this.regionGroup = this.$element.data( 'regiongroup' );
		this.init();
		this.listen();
	};

	RegionSelector.prototype = {
		constructor: RegionSelector,

		init: function () {
			var region = this.$element.data( 'region' );
			this.regions = $.uls.data.getRegionsInGroup( this.regionGroup );

			if ( region ) {
				this.regions.push( region );
			}
		},

		test: function ( langCode ) {
			var region, i,
				langRegions = $.uls.data.getRegions( langCode );

			for ( i = 0; i < this.regions.length; i++ ) {
				region = this.regions[i];

				if ( $.inArray( region, langRegions ) >= 0 ) {
					this.render( langCode, region );
					this.cache[langCode] = region;

					return;
				}
			}
		},

		show: function () {
			var result, languagesByScriptGroup, scriptGroup, languages, i,
				$element = this.options.$target && this.options.$target.$element,
				$parent = $element && $element.parent(),
				$prev = $element && $element.prev();

			if ( $element && $parent ) {
				// Avoid reflows while adding new elements to the list
				// Use .detach() to keep jQuery events and data associated with elements
				$element.detach();
			}

			if ( this.cache ) {
				// If the result cache is present, render the results from there.
				//noinspection JSUnusedAssignment
				result = null;

				for ( result in this.cache ) {
					this.render( result, this.cache[result] );
				}
			} else {
				this.cache = {};
				// Get the languages grouped by script group
				languagesByScriptGroup = $.uls.data.getLanguagesByScriptGroup( this.options.languages );

				// Make sure that we go by the original order
				// of script groups
				for ( scriptGroup in $.uls.data.scriptgroups ) {
					// Get the languages for the script group
					languages = languagesByScriptGroup[scriptGroup];

					// It's possible that some script groups are missing
					if ( !languages ) {
						continue;
					}

					// Sort it based on autonym
					languages.sort( $.uls.data.sortByAutonym );

					for ( i = 0; i < languages.length; i++ ) {
						// Check whether it belongs to the region
						this.test( languages[i] );
					}
				}
			}

			if ( $element && $parent ) {
				// Restore the element to where we removed it from
				if ( $prev ) {
					$prev.after( $element );
				} else {
					$parent.append( $element );
				}
			}

			if ( this.options.success ) {
				this.options.success( this );
			}
		},

		render: function ( langCode, region ) {
			var $target = this.options.$target;

			if ( !$target ) {
				return;
			}

			$target.append( langCode, region );
		},

		listen: function () {
			this.$element.on( 'click', $.proxy( this.click, this ) );
		},

		click: function () {
			var $list, $firstTargetRegion;

			// Don't do anything if a region is selected already
			if ( this.$element.hasClass( 'active' ) ) {
				return;
			}

			$list = this.options.$target.$element;
			$firstTargetRegion = $list.find( '#' + this.regions[0] );

			// Scroll to appropriate area
			$list.scrollTop(
				$firstTargetRegion.offset().top - $list.offset().top + $list.scrollTop()
			);

			// Make the selected region (and it only) active
			$( '.regionselector' ).removeClass( 'active' );

			if ( this.regionGroup ) {
				// if there is a region group, make it active.
				this.$element.addClass( 'active' );
			}
		}
	};

	/* RegionSelector plugin definition */

	$.fn.regionselector = function ( option ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'regionselector' ),
				options = typeof option === 'object' && option;

			if ( !data ) {
				$this.data( 'regionselector', ( data = new RegionSelector( this, options ) ) );
			}

			if ( typeof option === 'string' ) {
				data[option]();
			}
		} );
	};

	$.fn.regionselector.defaults = {
		$target: null, // Where to render the results
		success: null, // callback if any results found.
		noresults: null, // callback when no results to show
		languages: null
	};

	$.fn.regionselector.Constructor = RegionSelector;
} ( jQuery ) );
