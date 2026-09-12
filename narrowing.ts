type Cyclist = {cycle: () => void}
type Runner =  {run: () => void}
type Athlete = {
    run?: () => void;
    cycle?: () => void;
}

// Discriminated Union
type CyclistD = {
    kind: "c",
    cycle: () => void
}

type RunnerD = {
    kind: "r",
    run: () => void
}

type SwimmerD = {
    kind: "s",
    swim: () => void
}

type AthleteD = CyclistD | RunnerD | SwimmerD


function move(object: Cyclist | Runner| Athlete) {
    if ("cycle" in object) {
        object.cycle();
    } else {
        object.run?.();
    }
}

let runner: Runner = {
    run: () => {
        console.log("running")
    }
}

let cyclist: Cyclist = {
    cycle: () => {
        console.log("cycling")
    }
}

let athleteTriathlon: Athlete = {
    cycle: () => {
        console.log("CYCLING")
    },
    run: () => {
        console.log("RUNNING")
    }
}

let justAthelet: Athlete = {
    run: () => {
        console.log("RUNNING")
    }
}

move(runner)
move(cyclist)
move(athleteTriathlon)
move(justAthelet)

narrowing()

function narrowing() {
    let x : string | number | boolean

    x = Math.random() < 0.5

    console.log(x)

    if (Math.random() > 0.5) {
        x = "My Name"
        console.log(x)
    }

    x= 100;
    console.log(x)
}

narrowing()

function sayNever(obj: AthleteD): void {
    switch(obj.kind) {
        case "c":
            return console.log(obj.cycle())
        case "r":
            return console.log(obj.run())
        default:
            const lastCheck: never = obj
            return lastCheck
    }
}
