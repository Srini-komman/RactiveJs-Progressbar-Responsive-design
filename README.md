# RactiveJs-Progress-Bar-Responsive-Design-
RactiveJs Progress Bar(Responsive Design)

<b>Instructions for the output:</b><br>
<ul>
<li>
<b>Online: </b> <a href="https://rawgit.com/Srini-komman/RactiveJs-Progressbar-Responsive-design/master/ProgressBars.html">https://rawgit.com/Srini-komman/RactiveJs-Progressbar-Responsive-design/master/ProgressBars.html</a></br>
</li>
<li>
<b>Offline on your local computer:</b><br>
<ul>
<li>Download the source to local computer</li>
<li>Create virtual directory, map to physical root directory where the source has been downloaded</li>
<li>Run the url on your browser http://virtualdirectoryname/ProgressBars.html</li>
</ul>
</li>
</ul>

<b>TDD with mocah and chai</b><br>
<ul>
<li>
<b>Online: </b><a href="https://rawgit.com/Srini-komman/RactiveJs-Progressbar-Responsive-design/master/tests/index.html">https://rawgit.com/Srini-komman/RactiveJs-Progressbar-Responsive-design/master/tests/index.html</a>
</li>
<li>
<b>Offline on your local computer:</b><br>
<ul>
   <li>Install mocha<br>npm install mocha --save-dev</li>
   <li>Install chai<br>npm install chai --save-dev</li>
   <li>Change directory to tests</li>
   <li>Run the index.html on the browser</li>
</ul>
</li>
</ul>
<b>To run Grunt tasks:</b><br>
1. Please ensure that you have node installed on your server<br>
2. Install grunt by running following command on command prompt<br>
   <ul>
   <li>windows: npm install -g grunt-cli</li>
   <li>linux: sudo npm install -g grunt-cli</li>
   </ul>
3. Open the command prompt, change the working directory to app root directory(where Gruntfile.js and package.json are) and run following command<br>
   <ul><li>npm install</li></ul>
4. SASS setup
   <ul>
      <li>Download and install the <a href="http://rubyinstaller.org/downloads/">Ruby</a></li>
      <li>Change the working directory to ruby folder where the gem is installed</li>
      <li>Run the command on command prompt <br>gem install sass</li>
      <li><b>Double Check:</b><br>sass -v</li>
   </ul>
5. Run the following grunt tasks<br>
   <table>
     <tr>
     <th>Description</th>
     <th>tasks</th>
     </tr>
     <tr>
      <td>Validate files using jshint</td>
      <td>grunt jshint</td>
     </tr>
     <tr>
      <td>Minify JS files using UglifyJS</td>
      <td>grunt uglify</td>
     </tr>
     <tr>
      <td>Compress CSS files</td>
      <td>grunt cssmin</td>
     </tr>
     <tr>
      <td>Compile sass files to CSS</td>
      <td>grunt sass</td>
     </tr>
     <tr>
      <td>Compile LESS files to CSS</td>
      <td>grunt less</td>
     </tr>
     <tr>
      <td>To run all the above tasks</td>
      <td>grunt</td>
     </tr>
   </table>




 
