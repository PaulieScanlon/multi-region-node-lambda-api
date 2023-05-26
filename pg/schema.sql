ALTER DATABASE defaultdb SET PRIMARY REGION "aws-us-east-1";
ALTER DATABASE defaultdb ADD REGION "aws-eu-central-1";
ALTER DATABASE defaultdb ADD REGION  "aws-ap-southeast-1";

CREATE TABLE data (
    id UUID NOT NULL DEFAULT gen_random_uuid(),
    date TIMESTAMP NOT NULL,
    region crdb_internal_region NOT NULL,
    PRIMARY KEY (region, id)
) LOCALITY REGIONAL BY ROW AS region;
