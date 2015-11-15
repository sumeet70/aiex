# aiex
Apache Ignite Extensions

<ul>
    <li><a href="#s">Summary</a></li>
    <li><a href="#cf">Current Features</a></li>
    <li><a href="#hti">How to Install</a></li>
    <li><a href="#ug">Usage Guide</a></li>
    <li><a href="#uf">Usage Guide</a></li>
</ul>

<h2><a name="s"></a> Summary </h2>
Apache Ignite Extensions is a modular system to create user interface modules for interacting with application deployed
in Apache Ignite.<br/>

<img src="https://cloud.githubusercontent.com/assets/2068430/11163038/752911c0-8ae6-11e5-8abf-e57ccb1ed485.png" />

<h2><a name="cf"></a> Current Features</h2>
aeix can currently show a basic view of topology and supports all cache based operations.

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
you can skip to the <a href="#qs">Quick Setup</a> section below.

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
    For information on how to install git for you operating system please refer to:
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
    For information on how to install nodejs for you operating system please refer to:
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

<h4>Step 7: Start the server</h4>VTGQ
<p>
    <code>
        npm start
    </code>
</p>


<h2>Windows</h2>
<p>
    Following instructions were tested on freshly provisioned EC2 windows machine. Your mileage may vary depending on your OS.
</p>

<h4>Step 1: Install git</h4>
<p>
    http://git-scm.com/download/win
</p>
<p>
    For information on how to install git for you operating system please refer to:
    https://git-scm.com/book/en/v2/Getting-Started-Installing-Git.
</p>


<h4>Step 2: Install nodejs</h4>
<p>
    <code>
        https://nodejs.org/en/download/
    </code>
</p>
<p>
    For information on how to install nodejs for you operating system please refer to:
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

The application backend runs in node using express as middleware.
The front end of the application has been written in Angularjs 1.4.

<h2><a name="ug"></a> Usage Guide</h2>
<p>
The current version assumes that the ignite rest api is running on default localhost:8080 location.
Simply open your browser and navigate to <b>http://localhost:8081</b>
</p>

<h2><a name="uf"></a> Upcoming Features</h2>
<ul>
    <li>Log viewer</li>
    <li>Detailed topology and node information</li>
    <li>Ability to connect to multiple clusters</li>
</ul>

<h3>This project is under active development. Stay tuned for more.</h3>


