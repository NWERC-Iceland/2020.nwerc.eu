(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EFST:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system",function(){return n("IZNW")}])},IZNW:function(e,l,n){"use strict";n.r(l);var t=n("q1tI"),i=n.n(t),s=(n("YFqc"),n("5Yp1")),o=(n("iOjB"),i.a.createElement);l.default=function(){return o(s.a,null,o("h2",null,"Contest control system"),o("p",null,"During the contest, teams will submit proposed solutions to the contest","\n","problems to the judges using the Kattis contest control system. A","\n","preliminary version of the team manual for Kattis can be found","\n",o("a",{href:"/files/kattis-team-guide.pdf"},"here"),".","\n"),o("h3",null,"Compilation of submissions"),o("p",null,"Source files submitted to the judges will be compiled using the following command line arguments for the respective language:",o("ul",null,o("li",null,"C (GCC 9.3.0)",o("div",null,o("tt",null,"gcc -g -O2 -std=gnu11 -static {files} -lm"))),o("li",null,"C++ (GCC 9.3.0)",o("div",null,o("tt",null,"g++ -g -O2 -std=gnu++17 -static {files}"))),o("li",null,"Java 11 (OpenJDK, Java 11.0.10)",o("div",null,o("tt",null,"javac -encoding UTF-8 -sourcepath . -d . {files}"))),o("li",null,"Python 3 (PyPy3 7.3.1, Python 3.6.9)",o("div",null,o("tt",null,"python3 -m py_compile {files}"))),o("li",null,"Kotlin (1.4.21)",o("div",null,o("tt",null,"kotlinc -d . {files}"))))),o("p",null,'The "{files}" in the above commands represents the list of source files from the submission which will actually be compiled. Files with the following suffixes (and only files with these suffixes) will be submitted to the compiler:',o("ul",null,o("li",null,"For C submissions: .c"),o("li",null,"For C++ submissions: .cc. .C, .cpp, .cxx, or .c++"),o("li",null,"For Java submissions: .java"),o("li",null,"For Python submissions: .py"),o("li",null,"For Kotlin submissions: .kt"))),o("h3",null,"Execution of submissions"),o("p",null,"For each language, if the above compilation step is successful then the submission will be executed as follows:",o("ul",null,o("li",null,"For C/C++: the executable file generated by the compiler will be executed to generate the output of the submission."),o("li",null,"For Java: the compiled main class will be executed using the following command:",o("div",null,o("tt",null,"java -Dfile.encoding=UTF-8 -XX:+UseSerialGC -Xss128m -Xms1856m -Xmx1856m"))),o("li",null,"For Python 3: the main source file will be executed by the PyPy3 interpreter to generate the output of the submission."),o("li",null,"For Kotlin: the compiled main class will be executed using the following command:",o("div",null,o("tt",null,"kotlin -Dfile.encoding=UTF-8 -J-XX:+UseSerialGC -J-Xss128m -J-Xms1856m -J-Xmx1856m"))))),o("p",null,'Execution as described above will take place in a "sandbox". The',"\n","sandbox will allocate 2GB of memory; the entire program, including its","\n","runtime environment, must execute within this memory limit. For","\n","interpreted languages (Java, Python, and Kotlin) the runtime","\n","environment includes the interpreter (that is, the JVM for Java/Kotlin","\n","and the Python interpreter for Python).","\n"),o("p",null,"The sandbox memory allocation size will be the same for all languages","\n","and all contest problems. For Java and Kotlin, the above command shows","\n","the stack size and heap size settings which will be used when the","\n","program is run in the sandbox. For C, C++, and Python, the heap and","\n","stack sizes are limited only by the total amount of memory available in","\n","the sandbox."))}}},[["EFST",0,2,1,3,4]]]);