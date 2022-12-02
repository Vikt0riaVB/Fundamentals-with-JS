function spice(starting) {

    let totalExtract = 0;
    let days = 0;

    while (starting >= 100) {
        totalExtract += (starting - 26);
        starting -= 10;
        days++;

    }
    totalExtract -= 26;

    if (totalExtract < 0) {

        totalExtract = 0;

    }

     console.log(days);
     console.log(totalExtract);

}
spice(210)