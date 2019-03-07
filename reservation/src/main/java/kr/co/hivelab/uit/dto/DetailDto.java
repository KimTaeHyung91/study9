package kr.co.hivelab.uit.dto;

public class DetailDto {
    private String id;
    private String description;
    private String content;
    private String file_name;
    private String event;

    public String getId() {
        return id;
    }

    public void setId( String id ) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription( String description ) {
        this.description = description;
    }

    public String getContent() {
        return content;
    }

    public void setContent( String content ) {
        this.content = content;
    }

    public String getFile_name() {
        return file_name;
    }

    public void setFile_name( String file_name ) {
        this.file_name = file_name;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent( String event ) {
        this.event = event;
    }
}
