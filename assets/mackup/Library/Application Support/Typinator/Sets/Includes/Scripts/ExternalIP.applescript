-- Version 1.1, (C) Ergonis Software, 2016-05-03
-- Feel free to modify the script for your own use, but leave the copyright notice intact.
-- V1.0 (2012-01-19): Original version with http://automation.whatismyip.com/n09230945.asp
-- V1.1 (2016-05-03): Changed to http://icanhazip.com

-- The following public services return a short reply that contains just the public IP address:
--		http://icanhazip.com
--		http://ifconfig.me/ip
--		http://myip.dnsomatic.com/
-- The last one currently seems to be the fastest

try
	set curlCMD to Â
		"curl --stderr /dev/null \"http://myip.dnsomatic.com\""
	set myIP to (do shell script curlCMD)
	return myIP
on error (msg)
	return msg
end try
