let RequestFactory = ($resource) => {
	return $resource(
		'/api/articles/:email', 
		{ }, 
		{
			'query':  { method:'GET', isArray:false },
			'update': { method: 'PUT', params: { email: '@email' } },
			'create': { method: 'POST' }

		}
	);
};

export default RequestFactory;