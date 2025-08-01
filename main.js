window.addEventListener('load', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.ip-address').textContent = data.ip;

            console.log(data.ip)
            let ip = data.ip.substr( 0, 10 );
            if(ip=="60.139.101"){
            document.location = "http://192.168.3.143/";
            }else{
                document.location = "http://60.139.101.209:8080/";
            }
        })
        .catch(error => {
            console.error('IPアドレスの取得に失敗しました:', error);
            document.querySelector('.ip-address').textContent = '取得できませんでした';
        });

});
