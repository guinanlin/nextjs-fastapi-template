import json
from pathlib import Path
from app.main import app
import os

from dotenv import load_dotenv

load_dotenv()

OUTPUT_FILE = os.getenv("OPENAPI_OUTPUT_FILE")


def generate_openapi_schema(output_file):
    schema = app.openapi()
    output_path = Path(output_file)

    updated_schema = remove_operation_id_tag(schema)
    new_schema_json = json.dumps(updated_schema, indent=2)

    # 检查文件是否已存在以及内容是否已更改
    if output_path.exists():
        existing_schema_json = output_path.read_text()
        if existing_schema_json == new_schema_json:
            print("OpenAPI schema unchanged, skipping write.")
            return  # 如果内容相同，则不写入文件

    output_path.write_text(new_schema_json)
    print(f"OpenAPI schema saved to {output_file}")


def remove_operation_id_tag(schema):
    """
    Removes the tag prefix from the operation IDs in the OpenAPI schema.

    This cleans up the OpenAPI operation IDs that are used by the frontend
    client generator to create the names of the functions. The modified
    schema is then returned.
    """
    for path_data in schema["paths"].values():
        for operation in path_data.values():
            tag = operation["tags"][0]
            operation_id = operation["operationId"]
            to_remove = f"{tag}-"
            new_operation_id = operation_id[len(to_remove) :]
            operation["operationId"] = new_operation_id
    return schema


if __name__ == "__main__":
    generate_openapi_schema(OUTPUT_FILE)
