[Route("api/[controller]")]
[ApiController]
public class ${EntityPluralName}Controller(ISender sender) : ControllerBase
{
    private readonly ISender _sender = sender;

    [HttpGet("Get${EntitySimpleName}ById/{id}")]
    public async Task<IActionResult> Get${EntitySimpleName}ById(${EntityTypeID} id, CancellationToken cancellationToken)
    {
        var query = new Get${EntitySimpleName}ByIdQuery(id);
        var response = await _sender.Send(query, cancellationToken);
        return response.IsSuccess ? Ok(response) : NotFound(response.Error);
    }

    [HttpPost("GetAll${EntityPluralName}")]
    public async Task<IActionResult> GetAll${EntityPluralName}(CancellationToken cancellationToken)
    {
        var query = new GetAll${EntityPluralName}Query();
        var response = await _sender.Send(query, cancellationToken);
        return response.IsSuccess ? Ok(response) : NotFound(response.Error);
    }

    [HttpPost("Create${EntitySimpleName}")]
    public async Task<IActionResult> Create${EntitySimpleName}([FromBody] ${EntitySimpleName}DTO dto, CancellationToken cancellationToken)
    {
        var command = new Create${EntitySimpleName}Command(dto);
        var result = await _sender.Send(command, cancellationToken);
        return result.IsSuccess ? Ok(result) : BadRequest(result.Error);
    }

    [HttpPut("Update${EntitySimpleName}")]
    public async Task<IActionResult> Update${EntitySimpleName}([FromBody] ${EntitySimpleName}DTO dto, CancellationToken cancellationToken)
    {
        var command = new Update${EntitySimpleName}Command(dto);
        var result = await _sender.Send(command, cancellationToken);
        return result.IsSuccess ? Ok(result) : BadRequest(result.Error);
    }

    [HttpDelete("Delete${EntitySimpleName}/{id}")]
    public async Task<IActionResult> Delete${EntitySimpleName}(${EntityTypeID} id, CancellationToken cancellationToken)
    {
        var query = new Delete${EntitySimpleName}Command(id);
        var response = await _sender.Send(query, cancellationToken);
        return response.IsSuccess ? Ok(response) : NotFound(response.Error);
    }
}
