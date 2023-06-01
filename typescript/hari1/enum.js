{
    var month = void 0;
    (function (month) {
        month[month["jan"] = 1] = "jan";
    })(month || (month = {}));
    console.log(month[1]);
}
