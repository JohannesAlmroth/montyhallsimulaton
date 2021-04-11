using System.Collections.Generic;

namespace API.Models
{
  public class DoorRequest
  {
    public IEnumerable<DoorModel> Doors { get; set; }
    public int Switches { get; set; }
  }
}
