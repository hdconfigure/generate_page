#!/bin/sh
#copyright 2026 Theron Kauk and John Morris Beck - hd.configure.direct@gmail.com - all rights reserved
markdown_like_page_language(){ awk '

#todo
#sanitize inputs into markdown-like language
#risklevel severe

#detect if we are interpreting markdown_like_page_language or javascript
$0=="markdown_like_page_language"{
printf "%s" "console.log("$1"(";
interpet_markdown_like_page_language=1}

#if we are not interpreting markdown_like_page_language print $0
!interpret_markdown_like_page_language;

#if we are interpreting markdown_like_page_language
interpreting_markdown_like_page_language{


#determine if we are finished interpreting markdown_like_page_language
while(interpreting_markdown_like_page_language){
getline line_of_markdown_language;
if(line_of_markdown_language=="markdown_like_page_language"){
interpreting_markdown_like_page_language=0;
printf "%s" "));"
}

#if we are not inished interpreting markdown_like_langauge
else{

printf "%s" "\"" $0 "\"" ",";

}

}

}


';};


generate_page(){


    #create the javascript file that generates the new page
    pagefile="$1"
    cat "/home/user/projects/flightdeckexperiences/generate_page.js" "$pagefile" | markdown_like_page_language #> "/tmp/generate_page$$" 

#    node "/tmp/generate_page$$"
#    rm "/tmp/generate_page$$";

};
generate_page "$@";
