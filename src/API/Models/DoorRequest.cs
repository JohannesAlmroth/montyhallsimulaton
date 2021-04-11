using System.Collections.Generic;

namespace API.Models
{
  public class DoorRequest
  {
    public IEnumerable<DoorModel> Doors;
    public int Switches;
  }
}
