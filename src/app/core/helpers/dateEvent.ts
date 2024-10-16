export class CheckDate {
    public static eventDate(){
        const referenceDate = new Date('2024-10-10');
        const today = new Date();
      
        if (today < referenceDate) {
          return "Before";
        } else if (today >= referenceDate) {
          return "Current";
        }

        return "After";
    }
}
  