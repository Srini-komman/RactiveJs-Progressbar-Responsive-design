(function () {
	'use strict';
	describe( 'ractive-load', function () {
		var assert, load;
		assert = chai.assert;
		load = Ractive.load;
		
		it( 'should load a progressive-bar component with green colour', function () {
			return load( '../templates/progress-bar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {	
						bars:[{name:'progressbar1', level:0}], 
						increments: [{increment:25}]
					}
				});
				
				assert.equal( ractive.toHTML(), '<div class="progress-root"><div id="progressbar" class="progress green-bar" style="width:0%;"><span class="progress-label">0%</span></div></div> <div id="progresslevel"><select><option value="0" selected>progressbar1</option></select> <button>+25</button></div>');
				
				
			});
			
		});
		
		it( 'should load a progressive-bar component with red colour', function () {
			return load( '../templates/progress-bar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {	
						bars:[{name:'progressbar1', level:120}], 
						increments: [{increment:25}]
					}
				});
				
				assert.equal( ractive.toHTML(), '<div class="progress-root"><div id="progressbar" class="progress red-bar" style="width:100%;"><span class="progress-label">120%</span></div></div> <div id="progresslevel"><select><option value="0" selected>progressbar1</option></select> <button>+25</button></div>');
			});
			
		});
		
	});

}());
		
		