export class DateTimeGroup {
  currentMinute: number;
  stringForm: string;

  constructor(minute: number) {
    this.currentMinute = minute
    this.stringForm = this.convertToString();
  }

  private generateHour(): string {
    const inputHour = Math.floor(this.currentMinute/60);
    const hour = inputHour.toString();
    if (hour.length < 2) {
      return '0' + hour
    }
    return hour
  }

  private generateMinute(): string {
    const inputMinute = this.currentMinute > 59
      ? (this.currentMinute % 60).toString()
      : this.currentMinute.toString();
    if (inputMinute.length < 2) {
      return '0' + inputMinute
    }
    return inputMinute
  }

  private generateDate(): string {
    const date = new Date();
    let year = date.getFullYear().toString();
    year = year[2] + year[3];
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const dtgDate = 'Z/' + day + month + year;
    return dtgDate
  }

  private convertToString(): string {
    const time = this.generateHour() + ':' + this.generateMinute() + ':00';
    const date = this.generateDate();
    return time + date
  }
}

export default DateTimeGroup;
