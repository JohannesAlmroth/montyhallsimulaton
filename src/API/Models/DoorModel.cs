namespace API.Models
{
  public class DoorModel<T>
  {
    public T Content { get; set; }
    public int Amount { get; set; }
    public bool CanBeOpenedByMonty { get; set; }
  }
}
