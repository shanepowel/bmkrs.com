<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will be in the From field of the email.
$from = $_REQUEST['field2'];

// an email address that will receive the email with the output of the form
$sendTo = 'adriantanasse@gmail.com';

// subject of the email
$subject = $_REQUEST['need_service'];
$name = $_REQUEST['field1'];
$business = $_REQUEST['business'];
$service = $_REQUEST['need_service'];
// form field names and their translations.
// array variable name => Text to appear in the email

$cmessage = $_REQUEST['field3'];
// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{

    if(count($_POST) == 0) throw new \Exception('Form is empty');
            
    $emailText = $_REQUEST['field3'];

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";

	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody>";
	$body .= "<strong>MEET MOTION</strong><br>";
	$body .= "<br>";
	$body .= "<strong>Name:</strong> {$name}<br>";
	$body .= "<strong>Email:</strong> {$from}<br>";
	$body .= "<strong>Business Name:</strong> {$business}<br>";
	$body .= "<strong>Interested in:</strong> {$service}<br>";
	$body .= "";
	$body .= "<tr><td style='border:none;'><strong>Subiect:</strong> {$subject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
	$body .= "</tbody>";
	$body .= "</body></html>";
    // Send email
    mail($sendTo, $subject, $body, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['field3'];
}