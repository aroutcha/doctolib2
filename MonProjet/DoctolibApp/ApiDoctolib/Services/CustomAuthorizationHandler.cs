using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ApiDoctolib.Services;


namespace ApiDoctolib.Services
{
    public class CustomAuthorizationHandler : AuthorizationHandler<ConnectRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ConnectRequirement requirement)
        {
            if(!context.User.HasClaim(c => c.Type == ClaimTypes.Email))
            {
                return Task.CompletedTask;
            }
            else
            {
                if(requirement.Role == null 
                    || (context.User.HasClaim(c => c.Type == ClaimTypes.Role) 
                    && context.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Role).Value == requirement.Role))
                {
                    context.Succeed(requirement);
                }
                return Task.CompletedTask;
            }
        }
    }
}
