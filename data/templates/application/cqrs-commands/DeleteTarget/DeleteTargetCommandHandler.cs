internal sealed class Delete${EntitySimpleName}CommandHandler(I${EntitySimpleName}Repository ${EntitySimpleName}Repository, IUnitOfWork<EmpresasContext> unitOfWork) : ICommandHandler<Delete${EntitySimpleName}Command>
{
    private readonly I${EntitySimpleName}Repository _${EntitySimpleName}Repository = ${EntitySimpleName}Repository ?? throw new ArgumentNullException(nameof(${EntitySimpleName}Repository));
    private readonly IUnitOfWork<EmpresasContext> _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));

    public async Task<Result> Handle(Delete${EntitySimpleName}Command request, CancellationToken cancellationToken)
    {

        ${EntitySimpleName}Entity entity = await _${EntitySimpleName}Repository.FindById(request.Id);

        if (entity is null)
        {
            return Result.Fail(new Error(HttpStatusCode.NotFound,
            string.Format(ExceptionStrings.${EntitySimpleName}NotFound, request.Id)));
        }

        await _${EntitySimpleName}Repository.Delete(request.Id);
        await _unitOfWork.SaveChangesAsync();
        return Result.Success();
    }
}