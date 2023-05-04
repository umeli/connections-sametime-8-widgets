#!/bin/sh
SAMETIME="$1"
shift
PARAM="$*"
echo "Testing meeting catalog api on $SAMETIME"
echo ""
MEETINGS=$(curl $PARAM -k https://$SAMETIME/meeting-catalog/api/v1/meetings)
echo "Expected value: 'Unauthorized'. Result is $MEETINGS"
echo ""
echo "Testing Recording catalog api on $SAMETIME"
RECORDINGS=$(curl $PARAM -k https://$SAMETIME/meeting-recording/api/v1/recordings)
echo "Expected value: 'Unauthorized'. Result is $RECORDINGS"

echo ""
echo "testing local API Proxy container meeting: "
LOCALMEETING=$(curl $PARAM -k http://localhost:3000/v1/meetings/meetings)
echo "Expected value: 'Unauthorized'. Result is $LOCALMEETING"
echo ""
echo "testing local API Proxy container recordings: "
LOCALRECORDING=$(curl $PARAM -k http://localhost:3000/v1/recordings/recordings)
echo "Expected value: 'Unauthorized'. Result is $LOCALRECORDING"
echo ""
echo "If the API and Docker container are up, you should see 4 times 'Unauthorized'"
echo ""
echo "Summary: "
echo "ST Meeting:       $MEETINGS"
echo "ST Recordings:    $RECORDINGS"
echo "DO Meeting:       $LOCALMEETING"
echo "DO Recording:     $LOCALRECORDING"
echo ""
