require.async("second")
.then(function (second) {
    if (second !== 10) {
        window.error = "Second was not equal to 10";
    }
    window.done = true;
});

