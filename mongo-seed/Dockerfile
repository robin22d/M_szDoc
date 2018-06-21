# A docker file the will add the Json files into the database (takes a while to compleete)
FROM mongo
COPY ./JSON /JSON
CMD cd /JSON && for i in `ls *.JSON`; do  mongoimport --host database --db documents --collection m_szDocs --type json --file $i; done