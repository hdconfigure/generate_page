#!/bin/bash
generate_page(){

path="$1"
cat "$1/generate_page.js" "$2" > "/tmp/generate_page$$";
node "/tmp/generate_page$$" > "$3"
rm "/tmp/generate_page$$";

};
generate_page;
