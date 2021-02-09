## To create a self-signed ssl key pair, type the following into the command line while inside the /ssl directory.

Replace COUNTRY, STATE, CITY, COMPANY, IT, URL with your personal details.

`openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -sha256 -subj "/C=COUNTRY/ST=STATE/L=CITY/O=COMPANY/OU=IT/CN=URL"`
