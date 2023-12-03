export class CounterService {
    count = 0;
    onChangeStatus() {
        this.count++;
        console.log(this.count);
    }
}