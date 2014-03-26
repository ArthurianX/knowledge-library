#Zamolxian
WebApp with documentation, tutorials and community around a select topic/framework/language.

----

##Tools to install

###Apache2

####Install service
```
$ sudo apt-get update
$ sudo apt-get install apache2
```

####Add server name
```
$ sudo gedit /etc/apache2/apache2.conf
```
Add the following at the end:
```
ServerName localhost
```

####Set virtual host
```
$ sudo gedit /etc/apache2/sites-available/zamolxian.client
```
Insert the following:
```
<VirtualHost *:80>
    ServerName zamolxian.client
    ServerAlias http://zamolxian.client
    DocumentRoot "/var/www/Zamolxian/apps/source/build"
    ServerAdmin {admin email}
        <Directory "/var/www/Zamolxian/apps/source/build">
            Options Indexes FollowSymLinks
            AllowOverride All
            Order allow,deny
            Allow from all
            RewriteEngine on

            # Don't rewrite files or directories
            RewriteCond %{REQUEST_FILENAME} -f [OR]
            RewriteCond %{REQUEST_FILENAME} -d
            RewriteRule ^ - [L]

            # Rewrite everything else to index.html to allow html5 state links
            RewriteRule ^ index.html [L]

            # Rewrite URLs of the form 'x' to the form 'index.php?q=x'.
            #RewriteCond %{REQUEST_FILENAME} !-f
            #RewriteCond %{REQUEST_FILENAME} !-d
            #RewriteCond %{REQUEST_URI} !=/favicon.ico
            #RewriteRule ^(.*)$ index.html/$1 [L,QSA]
        </Directory>
</VirtualHost>
```

####Enable site
```
$ sudo gedit /etc/hosts
```
```
127.0.0.1	localhost
127.0.1.1 	zamolxian.client
```
```
$ sudo a2ensite zamolxian.client
```
####Set URL rewrite module
```
$ sudo a2enmod rewrite
```

###NodeJS
```
$ sudo apt-get install nodejs
```
Optionally
```
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
```
```
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```