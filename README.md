-------------------------------------------------------------------------------
				########    ###     ######  ########    #### ######## 
				##         ## ##   ##    ## ##           ##     ##    
				##        ##   ##  ##       ##           ##     ##    
				######   ##     ## ##       ######       ##     ##    
				##       ######### ##       ##           ##     ##    
				##       ##     ## ##    ## ##           ##     ##    
				##       ##     ##  ######  ########    ####    ##   
-------------------------------------------------------------------------------
	#### ##    ## ######## ######## ########  ##     ## #### ######## ##      ## 
	 ##  ###   ##    ##    ##       ##     ## ##     ##  ##  ##       ##  ##  ## 
	 ##  ####  ##    ##    ##       ##     ## ##     ##  ##  ##       ##  ##  ## 
	 ##  ## ## ##    ##    ######   ########  ##     ##  ##  ######   ##  ##  ## 
	 ##  ##  ####    ##    ##       ##   ##    ##   ##   ##  ##       ##  ##  ## 
	 ##  ##   ###    ##    ##       ##    ##    ## ##    ##  ##       ##  ##  ## 
	#### ##    ##    ##    ######## ##     ##    ###    #### ########  ###  ###  
-------------------------------------------------------------------------------
	  ___  _____   _____ ___      _   ___  _  _  ___ _____   ___               
	 | _ \/ _ \ \ / / __| _ \___ /_\ |   \| \| |/ _ \_   _| | _ \___ _ __ _  _ 
	 |   / (_) \ V /| _||   /___/ _ \| |) | .` | (_) || |   |   / -_) '  \ || |
	 |_|_\\___/ |_| |___|_|_\  /_/ \_\___/|_|\_|\___/ |_|   |_|_\___|_|_|_\_, |
	 
	 
## FaceIt Products

This project is mostly generated with:
 - Yeoman - THE Awesome generator
 
The development tools are:
 - NodeJs - THE JS core
 - Git - version control manager
 - Grunt - Task runner
 - Bower - client-side libraries manager
 - Karma - Test Executer
 - Jasmine - Test Writer
 - NgDoc - Documentation Generator
 The client-side libraries are:
 - Angular - MVC JS Framework
 - JQuery - JS Librarie
 - Bootstrap - CSS Librarie
 

# Exercice

The environment is composed from a task runner (Grunt), in order to process all development process tasks (integrity/test/build/doc).

The client-side libraries are Handled by a package manager (Bower).

The application has been generated following MVC design pattern (AngularJS).

The angular application allow CRUD on a product list. It's composed of:
 - 2 View: Main and About.
 - 2 Controllers: Handling the 2 views.
 - 1 Directive: to display/edit a product.
 - 1 Factory: to retrieve dummy data from a JSON file.

Test cases are written in behaviour-driven JavaScript (Jasmine).

Documentation is generated from application comments (NgDocs).

The project is under version control and available here (GitHub).

#Installation

Prerequisites:

NodeJS v0.10.x+ and NPM v2.1.0+ installed

1. Clone the Git Repository

	git clone https://github.com/USERNAME/REPOSITORY.git
	
2. Install dependencies

	npm install
	bower install

3. Run Grunt
	
	grunt

# Deploy Build & development

Run the following command in the project root folder:

grunt build - build the project for development.
grunt build:dist - build the project for release.

grunt serve - preview in development.
grunt serve:dist - preview for release.


# Run Tests

Run the following command in the project root folder:

grunt test - Execute all Jasmine tests.


# Generate Documentation

Run the following command in the project root folder:

grunt docs - Build the api documentation (accessible in /docs)
