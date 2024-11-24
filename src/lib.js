export function renderAlertDialog() {
    alert('Are you sure?');
}

export async function renderHumanDialog() {
    const Human = await import(/* webpackChunkName: "lib-human" */'./Human');

    return new Human("Alex", "Cherkashin");
}