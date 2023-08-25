let mydiv = document.getElementsByClassName('imgrow')[0];
console.log(mydiv)
mydiv.onclick = () => {
    let userday = document.getElementById('in1').value;
    let usermonth = document.getElementById('in2').value;
    let useryear = document.getElementById('in3').value;
    console.log(userday, usermonth, useryear)
    let date = new Date();
    let currentday = date.getDate();
    let currentmonth = date.getMonth();
    let currentyear = date.getFullYear();
    console.log(currentday, currentmonth, currentyear)
    if (userday == currentday && usermonth == currentmonth + 1) {
        let myspan = document.getElementById('message');
        myspan.innerHTML = 'Happy Birthday!,I hope for you a happy new year'
        Swal.fire({

            text: 'Happy Birthday!,I hope for you a happy new year',
            imageUrl: 'https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })

    }
    if (userday == currentday && usermonth == currentmonth + 1 && useryear == currentyear) {
        let myspan = document.getElementById('message');
        myspan.innerHTML = 'Welcome to Earth, I hope for you a happy life'




    }



    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (userday > currentday) {
        currentday = currentday + months[currentmonth + 1]
        currentday = currentday - 1;
    }
    if (usermonth > currentmonth) {
        currentmonth = currentmonth + 12;
        currentyear = currentyear - 1
    }
    currentmonth = currentmonth + 1;
    let d = currentday - userday;
    var m = currentmonth - usermonth;
    var y = currentyear - useryear;




    document.getElementsByClassName('space1')[0].innerHTML = y;
    document.getElementsByClassName('space2')[0].innerHTML = m;
    document.getElementsByClassName('space3')[0].innerHTML = d;
    if (userday == '') {
        let myspan = document.getElementById('messageerror');
        // myspan.innerHTML = 'please enter your day of birthday'
        let span1 = document.getElementById('s1');
        // alert('please enter your day of birthday')
        span1.innerHTML = '*please enter day '
        document.getElementById('in1').style.cssText = 'border:1px solid red'
        document.getElementsByClassName('space1')[0].innerHTML = " "


    }
    if (usermonth == '') {
        let myspan = document.getElementById('messageerror');
        // myspan.innerHTML = 'please enter your month of birthday'
        // alert('please enter your month of birthday')
        let span2 = document.getElementById('s2');
        // alert('please enter your day of birthday')
        span2.innerHTML = '*please enter month '
        document.getElementById('in2').style.cssText = 'border:1px solid red'
        document.getElementsByClassName('space2')[0].innerHTML = " "


    }
    if (useryear == '') {
        let myspan = document.getElementById('messageerror');
        // myspan.innerHTML = 'please enter your year of birthday'
        // alert('please enter your month of birthday')
        let span3 = document.getElementById('s3');
        // alert('please enter your day of birthday')
        span3.innerHTML = '*please enter year '
        document.getElementById('in3').style.cssText = 'border:1px solid red'
        document.getElementsByClassName('space3')[0].innerHTML = " "


    }





}