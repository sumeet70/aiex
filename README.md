# aiex
Apache Ignite Extensions

<ul>
    <li><a href="#s">Summary</a></li>
    <li><a href="#cf">Current Features</a></li>
    <li><a href="#hti">How to Install</a></li>
    <li><a href="#ug">Usage Guide</a></li>
    <li><a href="#uf">Upcoming Features</a></li>
</ul>

<h2><a name="s"></a> Summary </h2>
Apache Ignite Extensions is a modular system to create user interface modules for interacting with application deployed
in Apache Ignite.<br/>

<img src="https://cloud.githubusercontent.com/assets/2068430/11163038/752911c0-8ae6-11e5-8abf-e57ccb1ed485.png" />

<h2><a name="cf"></a> Current Features</h2>
aeix can currently shows a basic view of topology and supports invocation of all caching related operations.

<ul>
    <li>Topology Viewer</li>
    <li>Cache Operations</li>
</ul>


<h3>Basic Topology Viewer</h3>
<img src="https://cloud.githubusercontent.com/assets/2068430/11163111/8e9451d0-8ae9-11e5-81eb-09060e198b40.png" />

<h3>Cache Operations</h3>
<img src="https://cloud.githubusercontent.com/assets/2068430/11163114/a6fb9062-8ae9-11e5-8853-3a0142c40fc6.png" />

<h2><a name="hti"></a> How To Install</h2>

The application requires node runtime. If you are familiar with node and npm standard deployment/development workflow,
you can skip to the <a href="#qs">Quick Setup</a> section below. Otherwise read on..

<h3>Setup</h3>
Given below is the overall setup process:

<ul>
    <li>Install nodejs and npm</li>
    <li>Install git</li>
    <li>Install bower for ui dependency management</li>
    <li>install all bower packages</li>
    <li>Install all npm packages</li>
    <li>Start the server</li>
</ul>

<h2>Ubuntu</h2>
<p>
    Following instructions were tested on freshly provisioned EC2 server ubuntu-trusty-14.04-amd64. Your mileage may vary depending on your OS.
</p>

<h4>Step 1: Install git</h4>
<p>
    <code>
        sudo apt-get update
    </code> <br/>
    <code>
        sudo apt-get install git
    </code>
</p>
<p>
    For information on how to install git for your operating system please refer to:
    https://git-scm.com/book/en/v2/Getting-Started-Installing-Git.
</p>


<h4>Step 2: Install nodejs</h4>
<p>
    <code>
        curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    </code> <br/>
    <code>
        sudo apt-get install -y nodejs
    </code>
</p>

<p>
    For information on how to install nodejs for your operating system please refer to:
    https://nodejs.org/en/download/package-manager/
</p>


<h4>Step 3: Clone the repo</h4>
<p>
    <code>
        git clone https://github.com/sumeet70/aiex.git
    </code><br/>
</p>

<h4>Step 4: Install bower</h4>
<p>
    <code>
        sudo npm install bower -g
    </code>
</p>


<h4>Step 5: Install all npm packages</h4>
<p>Change the current directory to project root and install npm dependencies</p>
<p>
    <code>
        cd aiex
    </code> <br/>
    <code>
        npm install
    </code>
</p>


<h4>Step 6: Install all bower packages</h4>
<p>
    <code>
        bower install
    </code>
</p>

<h4>Step 7: Start the server</h4>
<p>
    Although it is recommended that you run the next command as is, but it can fail under certain circumstance. If that is the case, try running it as a sudoer.
    One of the conditions under which it is likely to fail is if you set the default port to be port 80 in /config.json,
    since port 80 access is blocked by some OS builds it only runs as sudo.
    There can be other permissions issues along the way that might prevent you from starting up a node process without sudo.
</p>
<p>
    <code>
        npm start
    </code>
</p>
<p>If you run into security problems run <code> sudo npm start </code></p>

<h2>Windows</h2>
<p>
    Following instructions were tested on freshly provisioned EC2 windows machine. Your mileage may vary depending on your OS.
</p>

<h4>Step 1: Install git</h4>
<p>
    http://git-scm.com/download/win
</p>
<p>
    For information on how to install git for your operating system please refer to:
    https://git-scm.com/book/en/v2/Getting-Started-Installing-Git.
</p>


<h4>Step 2: Install nodejs</h4>
<p>
    <code>
        https://nodejs.org/en/download/
    </code>
</p>
<p>
    For information on how to install nodejs for your operating system please refer to:
    https://nodejs.org/en/download/package-manager/
</p>


<h4>Step 3: Clone the repo</h4>
<p>Open command prompt or your favorite shell <b>as admin</b></p>
<p>
    <code>
        git clone https://github.com/sumeet70/aiex.git
    </code><br/>
</p>

<h4>Step 4: Install bower</h4>
<p>This step will usually fail if you don't run the following command <b>as admin</b></p>
<p>
    <code>
        npm install bower -g
    </code>
</p>


<h4>Step 5: Install all npm packages</h4>
<p>Change the current directory to project root and install npm dependencies</p>
<p>
    <code>
        cd aiex
    </code> <br/>
    <code>
        npm install
    </code>
</p>


<h4>Step 6: Install all bower packages</h4>
<p>
    <code>
        bower install
    </code>
</p>

<h4>Step 7: Start the server</h4>
<p>
    <code>
        npm start
    </code>
</p>

<h3><a name="qs"></a>Quick Setup</h3>
Follow these instructions if you are already setup with node, npm, bower and git. <br/>
These instructions assume that you already have npm and git on your path
<ul>
    <li>Clone the repo</li>
    <li>Open your favorite shell and navigate to the root of the project</li>
    <li>Run the following commands: <br/>
        <b>&nbsp;&nbsp; npm install</b><br/>
        <b>&nbsp;&nbsp; bower install</b><br/>
        <b>&nbsp;&nbsp; npm start</b><br/>
    </li>
    <li>Navigate to http://localhost:8081</li>
</ul>

The application backend runs in node using expressjs as middleware. The front end of the application has been written in Angularjs 1.4.

<h2><a name="ug"></a> Usage Guide</h2>
<p>
The current version assumes that the ignite rest api is running on default localhost:8080 location.
Additionally, if you want to run cache operations, you need to run ignite with caching enabled.
</p>

<h3>Enable REST Interface</h3>
<p>
In order to run ignite with REST api you need to load an optional library called <b>ignite-rest-http</b> <br/>
Simply go to <b>/libs/optional</b> folder in the root directory of your install and copy <b>ignite-rest-http</b> folder to <b>/libs</b> and then restart ignite.
</p>
<p>Please visit ignite docs for additional information on ignite setup: https://apacheignite.readme.io/docs/getting-started</p>

<h3>Enable Caching</h3>
<p>
To enable caching in ignite cluster you need to supply some basic configurations. When starting up your cluster, use one of the example configuration that already
ships with ignite code: <b>/examples/config/example-cahce.xml</b></p>
<p>Please visit ignite docs for additional information on ignite setup: https://apacheignite.readme.io/docs/getting-started</p>

<p>
You need to supply this configuration path as a command line parameter to ignite startup script ignite.sh (ignite.bat in windows command prompt).
This script is located in /bin directory of your installation root. <br/>
</p>

<p>
    You start up command should look like:<br/>

    <b>[Install Dir]/bin/ignite.sh [Install Dir]/examples/config/example-cahce.xml</b><br/>
    replace [Install Dir] with path to your installation directory.
</p>

<h3>Startup aiex</h3>
<p>
<ul>
<li>Run <code>npm start</code> (refer to how to install section)</li>
<li>Simply open your browser and navigate to <b>http://localhost:8081</b></li>
<li>If you started the webpage before starting the cluster simply refresh the page or
navigate to another tab and come back to topology tab to see the updated topology view.</li>
</ul>
</p>

<h2><a name="uf"></a> Upcoming Features</h2>
<ul>
    <li>Log viewer</li>
    <li>Detailed topology and node information</li>
    <li>Ability to connect to multiple clusters</li>
</ul>

<h3>This project is under active development. Stay tuned for more.</h3>