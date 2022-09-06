# Chinook 03

## Intro

Exercises related to the slides and demos:

- Group by
- Stored procedures
- Views
- Indexes
- Triggers

## 3.1 (Group by)

List all artists and how many albums they have released

So the query will return two columns:
- ArtistName
- NrOfAlbums: the amount of albums this artist has released

Solution

	select Artist.Name ArtistName, COUNT(*) NrOfAlbums
	from Album join Artist on Album.ArtistId = Artist.ArtistId
	group by Artist.Name

## 3.2 (Group by)

List the invoiceid(s) that contains the most invoicelines

Hint: google on "with ties" and "select top"

    select top 1 with ties InvoiceId, count(*) NrOfLines 
    from invoiceline
    group by InvoiceId
    order by count(*) desc

## 3.3 (Group by)

List the 10 artists (or more) who released the most albums (ArtistName, NrOfAlbums)

Hint: google on "with ties"

    select top 10 with ties Count(*) NrOfAlbums, Artist.Name
    from Artist join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.name
    order by NrOfAlbums desc

This will give you 12 rows (since more artists have produced 4 albums)

Alternative, if we are not certain the name of the artist is unique:

	select top 10 with ties Count(*) NrOfAlbums, Artist.Name
    from Artist 
	join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.ArtistId, Artist.Name
	order by NrOfAlbums desc, Artist.Name

Alternative with a subquery

    select NrOfAlbums, a.Name
    from Artist a join (

        select top 10 with ties Count(*) NrOfAlbums, Artist.ArtistId 
        from Artist join Album on Artist.ArtistId=Album.ArtistId
        group by Artist.ArtistId
        order by NrOfAlbums desc
        ) x
        on a.ArtistId = x.ArtistId

Alternative with selection in column

	select top 10 with ties Count(*) NrOfAlbums, (select Name from Artist A where A.ArtistId = Artist.ArtistId) Name
    from Artist join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.ArtistId
    order by NrOfAlbums desc
