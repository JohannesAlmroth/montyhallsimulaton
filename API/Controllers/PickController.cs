using System.Collections.Generic;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Route("api/[controller]")]
  public class PickController : Controller
  {
    private readonly IPickService _pickService;

    public PickController(IPickService pickService)
    {
      _pickService = pickService;
    }

    [HttpGet]
    public IActionResult PickOne<T>(Dictionary<int, T> valuePairs)
    {
      if (valuePairs.Count == 0)
      {
        return BadRequest();
      }

      return StatusCode(200, _pickService.PickOneRandomWeighted(valuePairs));
    }
  }
}
