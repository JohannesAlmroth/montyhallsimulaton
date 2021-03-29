using System;

namespace API.Models.Exceptions
{
  public class TooManySwitchesException : Exception
  {
    public TooManySwitchesException() { }
    public TooManySwitchesException(string message) : base(message) { }
  }
}
