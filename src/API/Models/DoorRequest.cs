using System.Collections.Generic;
using Newtonsoft.Json;

namespace API.Models
{
  public class DoorRequest
  {
    [JsonProperty("doors")]
    public IEnumerable<DoorModel> Doors;
    [JsonProperty("switches")]
    public int Switches;
  }
}
