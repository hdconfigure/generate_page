#!/bin/bash
generate_page(){
    pagefile="$1"
    #todo: change this to be dynamic path
cat "/home/user/projects/flightdeckexperiences/generate_page.js" "$pagefile" > "/tmp/generate_page$$";
node "/tmp/generate_page$$"
rm "/tmp/generate_page$$";

};
generate_page "$@";
