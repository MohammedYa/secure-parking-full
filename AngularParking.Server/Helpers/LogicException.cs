using System.ComponentModel;

namespace AngularParking.Server.Helpers;

public class LogicException : WarningException
{
    public string Message { get; private set; }
    public LogicException(string message) : base(message)
    {
        this.Message = message;
    }
}