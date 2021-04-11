using System.Collections.Generic;
using API.Models;
using API.Models.Exceptions;
using API.Services;
using Xunit;

namespace API.Tests
{
  public class PickServiceTests
  {
    [Theory]
    [MemberData(nameof(ExceptionData))]
    public void ThrowsExceptionIfTooManySwitches(List<DoorModel> doors, int switches, bool shouldThrowException)
    {
      // Arrange
      var sut = new PickService();

      // Act/Assert
      if (shouldThrowException)
      {
        Assert.Throws<TooManySwitchesException>(() => sut.PickADoor(doors, switches));
      }
      else
      {
        var result = sut.PickADoor(doors, switches);
      }
    }

    public static IEnumerable<object[]> ExceptionData()
    {
      yield return new object[] { new List<DoorModel> {
        new DoorModel { Content = "Car", Amount = 1, CanBeOpenedByMonty = false},
        new DoorModel { Content = "Goat", Amount = 2, CanBeOpenedByMonty = true}
      }, 2 , true};
      yield return new object[] { new List<DoorModel> {
        new DoorModel { Content = "Car", Amount = 5, CanBeOpenedByMonty = false},
        new DoorModel { Content = "Goat", Amount = 5, CanBeOpenedByMonty = true}
      }, 5 , true};
      yield return new object[] { new List<DoorModel> {
        new DoorModel { Content = "Car", Amount = 5, CanBeOpenedByMonty = false},
        new DoorModel { Content = "Goat", Amount = 5, CanBeOpenedByMonty = true},
        new DoorModel { Content = "Sheep", Amount = 5, CanBeOpenedByMonty = true}
      }, 8 , false};
    }
  }
}
