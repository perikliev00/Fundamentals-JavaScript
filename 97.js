function experienceGainig(arr) {
    let neededExperience=arr[0];
    let battleCount=arr[1];
    let experience=0;
    let x=0;
    let j=0;
    for(let i=2;i<arr.length;i++) {
        let bonus=0;
        let minus=0;
        if(experience>=neededExperience) {
            console.log(`Player successfully collected his needed experience for ${x} battles.`);
            j++;
            break;
        }
        x++;
        if(x%3==0) {
            bonus=arr[i]*0.15;
        } else if(x%5==0) {
            minus=arr[i]*0.10
        } else if(x%15==0) {
            bonus=arr[i]*0.05;
        }
        experience=experience+arr[i]+bonus-minus;
    }
    if(experience>=neededExperience&&j==0) {
        console.log(`Player successfully collected his needed experience for ${x} battles.`);
    } else if(experience<neededExperience) {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience-experience).toFixed(2)} more needed.`)
    }
}
experienceGainig([500,5,50,100,200,100,20])