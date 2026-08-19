#!/bin/bash
#copyright (c) 2026 Theron Kauk and John Morris Beck
generate_page(){

    path="$1"
    pagefile="$2"
    outputpagepath="$3"
cat "$path/generate_page.js" "$pagefile" > "/tmp/generate_page$$";
node "/tmp/generate_page$$" > "$outputpagepath"
rm "/tmp/generate_page$$";

};
generate_page "$@";
