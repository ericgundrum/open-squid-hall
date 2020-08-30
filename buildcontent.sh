#!/bin/bash
# This script generates code for and merges the content files.
python3 tools/sqs/sqs.py generate content/*.content.module.json
python3 tools/sqs/sqs.py filter libs/modules/ MergeContentJS libs/modules/content/*.js
#python3 tools/sqs/sqs.py generate content/wheketere/*.content.module.json
#python3 tools/sqs/sqs.py filter libs/modules/ MergeContentJS libs/modules/content/wheketere/*.js
#python3 tools/sqs/sqs.py generate content/idiosepius/*.content.module.json
#python3 tools/sqs/sqs.py filter libs/modules/ MergeContentJS libs/modules/content/idiosepius/*.js
