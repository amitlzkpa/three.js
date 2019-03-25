/**
 * @author Amit Nambiar https://github.com/amitlzkpa
 *
 * Loader loads 3DM file 
 *
 * Needs Support:

 *
 * 3DM format references:
 * 	https://www.rhino3d.com/opennurbs
 *
 */


THREE.ThreeDMLoader = ( function () {

	function ThreeDMLoader( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	}

	ThreeDMLoader.prototype = {

		constructor: ThreeDMLoader,

		crossOrigin: 'anonymous',

		load: function ( url, onLoad, onProgress, onError ) {

			var self = this;

			var path = ( self.path === undefined ) ? THREE.LoaderUtils.extractUrlBase( url ) : self.path;

			var loader = new THREE.FileLoader( this.manager );
			loader.setPath( self.path );
			loader.setResponseType( 'arraybuffer' );

			loader.load( url, function ( buffer ) {

				try {

					onLoad( self.parse( buffer, path ) );

				} catch ( error ) {

					setTimeout( function () {

						if ( onError ) onError( error );

						self.manager.itemError( url );

					}, 0 );

				}

			}, onProgress, onError );

		},

		setPath: function ( value ) {

			this.path = value;
			return this;

		},

		setResourcePath: function ( value ) {

			this.resourcePath = value;
			return this;

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;
			return this;

		},

		parse: function ( ThreeDMBuffer, path ) {

			return new ThreeDMParser().parse( ThreeDMBuffer );

		}

	};

	function ThreeDMParser() {

	}

	ThreeDMParser.prototype = {

		constructor: ThreeDMParser,

		parse: function ( ThreeDMBuffer ) {

			return null;

		}

	};

	return ThreeDMLoader;

} )();
