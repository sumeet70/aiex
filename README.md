# aiex
Apache Ignite Extensions

<ul>
    <li>Summary</li>
    <li>Current Features</li>
    <li><a href="#hti">How to Install</a></li>
</ul>



<h2> Summary </h2>

Apache Ignite Extensions is a modular system to create user interface modules for interacting with application deployed
in Apache Ignite.

<h2> Current Features</h2>
<ul>
    <li>User interface for cache operations exposed by Apache Ignite rest api</li>
</ul>

<h2> Usage Guide</h2>
The application backend runs in node using express as middleware.
The front end of the application has been written in Angularjs 1.4.

<h2><a name="hti"></a> How To Install</h2>

The application requires node runtime. If you are familiar with node and npm standard deployment/development workflow,
you can skip to the <a href="#qs">Quick Setup</a> section below.

<h3>Setup</h3>
Given below is the overall setup process:

<ul>
    <li>Install nodejs and npm</li>
    <li>Install git</li>
    <li>Install bower by running: <b>npm install bower</b></li>
    <li>Install all bower packages by running: <b>bower install</b></li>
    <li>Install all npm packages by running: <b>npm install</b></li>
    <li>Start the server by running: <b>npm start</b></li>
</ul>

<h3>Ubuntu</h3>
<p>
    These instructions were tested on freshly provisioned EC2 server ubuntu-trusty-14.04-amd64. Your mileage may vary depending on your OS.
    If you are on ubuntu-trusty, there is a combined snippet at the bottom of these instructions.
    Simply paste it into your shell and you should be good to go.
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
<p>Change the current directory to project root (
    <code>
        cd aiex
    </code> ) and then run the following command:
</p>
<p>
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

<h4>This is what complete setup looks like</h4>
<p>
    <code>sudo apt-get update </code><br/>
    <code>sudo apt-get install git</code><br/>
    <code>curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -</code><br/>
    <code>sudo apt-get install -y nodejs</code><br/>
    <code>git clone https://github.com/sumeet70/aiex.git</code><br/>
    <code>sudo npm install bower -g</code><br/>
    <code>cd aiex</code><br/>
    <code>npm install</code><br/>
    <code>bower install</code><br/>
    <code>npm start</code><br/>
</p>




<h3><a name="qs"></a>Quick Setup</h3>
Follow these instructions if you are already setup with node, npm, bower and git. <br/>
These instructions assume that you already have npm and git on your path
<ul>
    <li>Clone the repo</li>
    <li>Open your favorite shell and navigate to the root of the project</li>
    <li>Install all npm packages by running: <b>npm install</b></li>
    <li>Install all bower packages by running: <b>bower install</b></li>
    <li>Start the server by running: <b>npm start</b></li>
    <li>Navigate to http://localhost:8080</li>
</ul>

The application backend runs in node using express as middleware.
The front end of the application has been written in Angularjs 1.4.


<h3>
Stay tuned for more !!
</h3>