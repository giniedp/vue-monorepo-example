export class Counter {

  public get value(): number {
    return this.count
  }

  private count: number

  constructor(count = 0) {
    this.count = count
  }

  public increment(): void {
    this.count++
  }

  public decrement(): void {
    this.count++
  }
}
