function loop(start, end, skip, stop) {
    if (start == undefined || end == undefined || skip == undefined || stop == undefined) {
        console.log("enter four numbers");
    }

    for (let i = start; i <= end; i++) {
        if (i == skip) continue;
        if (i == stop) break;
        console.log(i);
    }
}


loop(5, 20, 9, 15);
