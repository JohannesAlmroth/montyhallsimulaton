using Newtonsoft.Json;

namespace API.Models
{
  public class DoorModel
  {
    [JsonProperty("content")]
    public string Content { get; set; }
    [JsonProperty("amount")]
    public int Amount { get; set; }
    [JsonProperty("canBeOpenedByMonty")]
    public bool CanBeOpenedByMonty { get; set; }
  }
}
