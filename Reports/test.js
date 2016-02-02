function sortBubble(data) {
    var tmp;
    var d = data.length - 1;
    var interval = setInterval(function() {
        if (d > 0) {
            for (var i = 0; i < d; i++) {
                if (data[i] > data[i + 1]) {
                    tmp = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = tmp;
                }
            }
            d--;
        } else {
            clearInterval(interval);
        }
        console.log(data);
    }, 1000);
}
sortBubble([99, 5, 67, 344, 7, 4, 2]);