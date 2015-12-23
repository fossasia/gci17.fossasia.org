/**
 * Utility functions for querying language data.
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

	/**
	 * Is this language a redirect to another language?
	 * @param language string Language code
	 * @return Target language code if it's a redirect or false if it's not
	 */
	$.uls.data.isRedirect = function ( language ) {
		return ( $.uls.data.languages[language] !== undefined &&
			$.uls.data.languages[language].length === 1 ) ? $.uls.data.languages[language][0] : false;
	};

	/**
	 * Returns the script of the language.
	 * @param language string Language code
	 * @return string
	 */
	$.uls.data.getScript = function ( language ) {
		var target = $.uls.data.isRedirect( language );

		if ( target ) {
			return $.uls.data.getScript( target );
		}

		if ( !$.uls.data.languages[language] ) {
			// Undetermined
			return 'Zyyy';
		}

		return $.uls.data.languages[language][0];
	};

	/**
	 * Returns the regions in which a language is spoken.
	 * @param language string Language code
	 * @return array|string 'UNKNOWN'
	 */
	$.uls.data.getRegions = function ( language ) {
		var target = $.uls.data.isRedirect( language );

		if ( target ) {
			return $.uls.data.getRegions( target );
		}

		return ( $.uls.data.languages[language] && $.uls.data.languages[language][1] ) || 'UNKNOWN';
	};

	/**
	 * Returns the autonym of the language.
	 * @param language string Language code
	 * @return string
	 */
	$.uls.data.getAutonym = function ( language ) {
		var target = $.uls.data.isRedirect( language );

		if ( target ) {
			return $.uls.data.getAutonym( target );
		}

		return ( $.uls.data.languages[language] && $.uls.data.languages[language][2] ) || language;
	};

	/**
	 * Returns all language codes and corresponding autonyms
	 * @return array
	 */
	$.uls.data.getAutonyms = function () {
		var language,
			autonymsByCode = {};

		for ( language in $.uls.data.languages ) {
			if ( $.uls.data.isRedirect( language ) ) {
				continue;
			}

			autonymsByCode[language] = $.uls.data.getAutonym( language );
		}

		return autonymsByCode;
	};

	/**
	 * Returns an array of all region codes.
	 * @return array
	 */
	$.uls.data.getAllRegions = function () {
		var region,
			allRegions = [];

		for ( region in $.uls.data.regiongroups ) {
			allRegions.push( region );
		}

		return allRegions;
	};

	/**
	 * Returns all languages written in script.
	 * @param script string
	 * @return array of strings (languages codes)
	 */
	$.uls.data.getLanguagesInScript = function ( script ) {
		return $.uls.data.getLanguagesInScripts( [ script ] );
	};

	/**
	 * Returns all languages written in the given scripts.
	 * @param scripts array of strings
	 * @return array of strings (languages codes)
	 */
	$.uls.data.getLanguagesInScripts = function ( scripts ) {
		var language, i,
			languagesInScripts = [];

		for ( language in $.uls.data.languages ) {
			if ( $.uls.data.isRedirect( language ) ) {
				continue;
			}

			for ( i = 0; i < scripts.length; i++ ) {
				if ( scripts[i] === $.uls.data.getScript( language ) ) {
					languagesInScripts.push( language );
					break;
				}
			}
		}

		return languagesInScripts;
	};

	/**
	 * Returns all languages in a given region.
	 * @param region string
	 * @return array of strings (languages codes)
	 */
	$.uls.data.getLanguagesInRegion = function ( region ) {
		return $.uls.data.getLanguagesInRegions( [ region ] );
	};

	/**
	 * Returns all languages in given regions.
	 * @param regions array of strings.
	 * @return array of strings (languages codes)
	 */
	$.uls.data.getLanguagesInRegions = function ( regions ) {
		var language, i,
			languagesInRegions = [];

		for ( language in $.uls.data.languages ) {
			if ( $.uls.data.isRedirect( language ) ) {
				continue;
			}

			for ( i = 0; i < regions.length; i++ ) {
				if ( $.inArray( regions[i], $.uls.data.getRegions( language ) ) !== -1 ) {
					languagesInRegions.push( language );
					break;
				}
			}
		}

		return languagesInRegions;
	};

	/**
	 * Returns all languages in a region group.
	 * @param groupNum number.
	 * @return array of strings (languages codes)
	 */
	$.uls.data.getLanguagesInRegionGroup = function ( groupNum ) {
		return $.uls.data.getLanguagesInRegions( $.uls.data.getRegionsInGroup( groupNum ) );
	};

	/**
	 * Returns an associative array of languages in a region,
	 * grouped by script.
	 * @param region string Region code
	 * @return associative array
	 */
	$.uls.data.getLanguagesByScriptInRegion = function ( region ) {
		var language, script,
			languagesByScriptInRegion = {};

		for ( language in $.uls.data.languages ) {
			if ( $.uls.data.isRedirect( language ) ) {
				continue;
			}

			if ( $.inArray( region, $.uls.data.getRegions( language ) ) !== -1 ) {
				script = $.uls.data.getScript( language );

				if ( languagesByScriptInRegion[script] === undefined ) {
					languagesByScriptInRegion[script] = [];
				}
				languagesByScriptInRegion[script].push( language );
			}
		}

		return languagesByScriptInRegion;
	};

	/**
	 * Returns an associative array of languages in a region,
	 * grouped by script group.
	 * @param region string Region code
	 * @return associative array
	 */
	$.uls.data.getLanguagesByScriptGroupInRegion = function ( region ) {
		return $.uls.data.getLanguagesByScriptGroupInRegions( [ region ] );
	};

	/**
	 * Returns an associative array of all languages,
	 * grouped by script group.
	 * @return associative array
	 */
	$.uls.data.getAllLanguagesByScriptGroup = function () {
		return $.uls.data.getLanguagesByScriptGroupInRegions( $.uls.data.getAllRegions() );
	};

	/**
	 * Get the given list of languages grouped by script.
	 * @param languages Array of language codes
	 * @return {Object} Array of languages indexed by script codes
	 */
	$.uls.data.getLanguagesByScriptGroup = function ( languages ) {
		var languagesByScriptGroup = {},
			language, codeToAdd, langScriptGroup;

		for ( language in languages ) {
			codeToAdd = $.uls.data.isRedirect( language ) || language;

			langScriptGroup = $.uls.data.getScriptGroupOfLanguage( codeToAdd );

			if ( !languagesByScriptGroup[langScriptGroup] ) {
				languagesByScriptGroup[langScriptGroup] = [];
			}

			// Prevent duplicate adding of redirects
			if ( $.inArray( codeToAdd, languagesByScriptGroup[langScriptGroup] ) === -1 ) {
				languagesByScriptGroup[langScriptGroup].push( codeToAdd );
			}
		}

		return languagesByScriptGroup;
	};

	/**
	 * Returns an associative array of languages in several regions,
	 * grouped by script group.
	 * @param regions array of strings - region codes
	 * @return associative array
	 */
	$.uls.data.getLanguagesByScriptGroupInRegions = function ( regions ) {
		var language, i, scriptGroup,
			languagesByScriptGroupInRegions = {};

		for ( language in $.uls.data.languages ) {
			if ( $.uls.data.isRedirect( language ) ) {
				continue;
			}

			for ( i = 0; i < regions.length; i++ ) {
				if ( $.inArray( regions[i], $.uls.data.getRegions( language ) ) !== -1 ) {
					scriptGroup = $.uls.data.getScriptGroupOfLanguage( language );

					if ( languagesByScriptGroupInRegions[scriptGroup] === undefined ) {
						languagesByScriptGroupInRegions[scriptGroup] = [];
					}

					languagesByScriptGroupInRegions[scriptGroup].push( language );
					break;
				}
			}
		}

		return languagesByScriptGroupInRegions;
	};

	/**
	 * Returns an array of languages grouped by region group,
	 * region, script group and script.
	 * @return associative array
	 */
	$.uls.data.getAllLanguagesByRegionAndScript = function () {
		var region, regionGroup, language,
			script, scriptGroup, regions, regionNum,
			allLanguagesByRegionAndScript = {};

		for ( region in $.uls.data.regiongroups ) {
			regionGroup = $.uls.data.regiongroups[region];

			if ( allLanguagesByRegionAndScript[regionGroup] === undefined ) {
				allLanguagesByRegionAndScript[regionGroup] = {};
			}

			allLanguagesByRegionAndScript[regionGroup][region] = {};
		}

		for ( language in $.uls.data.languages ) {
			if ( $.uls.data.isRedirect( language ) ) {
				continue;
			}

			script = $.uls.data.getScript( language );
			scriptGroup = $.uls.data.getGroupOfScript( script );
			regions = $.uls.data.getRegions( language );

			for ( regionNum = 0; regionNum < regions.length; regionNum++ ) {
				region = regions[regionNum];
				regionGroup = $.uls.data.regiongroups[region];

				if ( allLanguagesByRegionAndScript[regionGroup][region][scriptGroup] === undefined ) {
					allLanguagesByRegionAndScript[regionGroup][region][scriptGroup] = {};
				}

				if ( allLanguagesByRegionAndScript[regionGroup][region][scriptGroup][script] === undefined ) {
					allLanguagesByRegionAndScript[regionGroup][region][scriptGroup][script] = [];
				}

				allLanguagesByRegionAndScript[regionGroup][region][scriptGroup][script].push( language );
			}
		}

		return allLanguagesByRegionAndScript;
	};

	/**
	 * Returns all regions in a region group.
	 * @param groupNum int
	 * @return array of strings
	 */
	$.uls.data.getRegionsInGroup = function ( groupNum ) {
		var region,
			regionsInGroup = [];

		for ( region in $.uls.data.regiongroups ) {
			if ( $.uls.data.regiongroups[region] === groupNum ) {
				regionsInGroup.push( region );
			}
		}

		return regionsInGroup;
	};

	/**
	 * Returns the script group of a script or 'Other' if it doesn't
	 * belong to any group.
	 * @param script string Script code
	 * @return string script group name
	 */
	$.uls.data.getGroupOfScript = function ( script ) {
		var scriptGroup;

		for ( scriptGroup in $.uls.data.scriptgroups ) {
			if ( $.inArray( script, $.uls.data.scriptgroups[scriptGroup] ) !== -1 ) {
				return scriptGroup;
			}
		}

		return 'Other';
	};

	/**
	 * Returns the script group of a language.
	 * @param language string Language code
	 * @return string script group name
	 */
	$.uls.data.getScriptGroupOfLanguage = function ( language ) {
		return $.uls.data.getGroupOfScript( $.uls.data.getScript( language ) );
	};

	/**
	 * A callback for sorting languages by autonym.
	 * Can be used as an argument to a sort function.
	 * @param a string Language code
	 * @param b string Language code
	 */
	$.uls.data.sortByAutonym = function ( a, b ) {
		var autonymA = $.uls.data.getAutonym( a ) || a,
			autonymB = $.uls.data.getAutonym( b ) || b;

		return ( autonymA.toLowerCase() < autonymB.toLowerCase() ) ? -1 : 1;
	};

	/**
	 * Check if a language is right-to-left.
	 * @param language string Language code
	 * @return boolean
	 */
	$.uls.data.isRtl = function ( language ) {
		return $.inArray( $.uls.data.getScript( language ), $.uls.data.rtlscripts ) !== -1;
	};

	/**
	 * Return the direction of the language
	 * @param language string Language code
	 * @return string
	 */
	$.uls.data.getDir = function ( language ) {
		return $.uls.data.isRtl( language ) ? 'rtl' : 'ltr';
	};

	/**
	 * Returns the languages spoken in a territory.
	 * @param territory string Territory code
	 * @return list of language codes
	 */
	$.uls.data.getLanguagesInTerritory = function ( territory ) {
		return $.uls.data.territories[territory];
	};

	/**
	 * Adds a language in run time and sets its options as provided.
	 * If the target option is provided, the language is defined as a redirect.
	 * Other possible options are script, regions and autonym.
	 *
	 * @param code string New language code.
	 * @param options Object Language properties.
	 * @return list of language codes
	 */
	$.uls.data.addLanguage = function( code, options ) {
		if ( options.target ) {
			$.uls.data.languages[code] = [options.target];
		} else {
			$.uls.data.languages[code] = [options.script, options.regions, options.autonym];
		}
	};

	/**
	 * Removes a language from the langdb in run time.
	 *
	 * @param code string Language code to delete.
	 * @return true if the language was removed, false otherwise.
	 */
	$.uls.data.deleteLanguage = function( code ) {
		if ( $.uls.data.languages[code] ) {
			delete $.uls.data.languages[code];

			return true;
		}

		return false;
	};
} ( jQuery ) );
