#!/bin/sh
echo "reference: "
curl  -v https://dosam.collab.cloud/meeting-catalog/api/v1

echo ""
echo "test: "
curl -v http://localhost:3001/stm/meetings

echo ""
