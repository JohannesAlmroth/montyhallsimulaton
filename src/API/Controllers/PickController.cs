using System;
using System.Net.Http;
using API.Models;
using API.Models.Exceptions;
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

    [HttpPost]
    [Route("one")]
    public ActionResult PickOne([FromBody] DoorRequest request)
    {
      if (request == null)
      {
        return StatusCode(400);
      }
      try
      {
        return StatusCode(200, _pickService.PickADoor(request.Doors, request.Switches));
      }
      catch (TooManySwitchesException e)
      {
        //log exception
        return StatusCode(400, e.Message);
      }
      catch (NullReferenceException e)
      {
        //log exception
        return StatusCode(400, e.Message);
      }
      catch (Exception e)
      {
        //log exception
        return StatusCode(500, e.Message);
      }
    }
  }
}
